@extends('layouts.app')

@section('content')
<folderList files="{{ json_encode($items) }}" dirs="{{ json_encode($dirs) }}"></folderList>
@endsection
