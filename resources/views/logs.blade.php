@extends('layouts.app')

@section('content')
<div class="ui container">
	<div class="ui top attached menu">
		<div class="item">
			<i class="book icon"></i>
			Logs
		</div>
		<div class="right menu">
		</div>
	</div>
	<div class="ui attached segment">
		<div class="ui two column grid">
			<div class="left aligned two wide column">
				<div class="ui attached menu vertical">

					@php dd($items) @endphp
					@foreach ($items as $item)
						<div class="item"> {{ $item['basename'] }} </div>
					@endforeach
				</div>
			</div>
			<div class="right aligned fourteen wide column">
				<div class="ui segment">
					<p>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
