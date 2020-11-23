<?php

namespace App\Http\Controllers\Administrator;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Repositories\RoleRepository;
use Illuminate\Support\Facades\Gate;
use Hexters\Ladmin\Exceptions\LadminException;
use Hexters\Ladmin\Helpers\Menu;

class PermissionController extends Controller {

    protected $repository;

    public function __construct(RoleRepository $repository) {
        $this->repository = $repository; 
    }
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request) {
        if(Gate::denies('administrator.access.permission.index')) abort(403);
        if($request->ajax()) {
            return $this->repository->datatablesPermission();
        }
        return view('ladmin::ladmin.index', $this->repository->datatablesOptionsPermission());
    }
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id) {
        if(Gate::denies('administrator.access.permission.assign')) abort(403);

        $request->validate([
            'gates' => ['required']
        ]);

        try {
            $role = $this->repository->getModel()->findOrFail($id);
            $role->update([
                'gates' => $request->gates
            ]);
            session()->flash('success', [
                'Permission has been signed sucessfully'
            ]);
            return redirect()->back();
        } catch (LadminException $e) {
            return redirect()->back()->withErrors([
                $e->getMessage()
            ]);
        }
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) {
        if(Gate::denies('administrator.access.permission.show')) abort(403);

        $data['role'] = $this->repository->getModel()->findOrFail($id);
        $data['menu'] = new Menu;
        return view('vendor.ladmin.permission.show', $data);
    }

    
}
