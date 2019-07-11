@extends('layouts.app')

@section('content')
<div class="ui container">
	<div class="ui attached horizontal segments">
		<div class="ui segment">
			<div class="ui two column grid">
				<div class="left attached column">
					<img src="data:image/png;base64, {{$img}}" style="height: 64px; width: 64px;"/>
				</div>
				<div class="right attached column">
					<div class="name">Name : {{$name}}</div>
					<div class="status">Status : {{$g_status}}</div>
					<div class="players">Players : {{$c_player}} / {{$m_player}}</div>
					<div class="version">Game version : {{$g_version}}</div>
					<a class="ui button" href="/admin/console">Console</a>
					<a class="ui button" href="/admin/logs">Logs</a>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
