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
		<div class="ui two column grild">
			<div class="left aligned three wide column">
				<div class="ui attached menu vertical">

					@foreach ($items as $item)
						<a class="item" href="/admin/logs/?file={{ $item['basename'] }}"> {{ $item['basename'] }} </a>
					@endforeach
				</div>
			</div>
			<div class="right aligned thirteen wide column">
				<div class="ui segment">
					<p style="white-space: pre-line;">
						{{ $log_content }}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
