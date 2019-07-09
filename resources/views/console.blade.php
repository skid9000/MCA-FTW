@extends('layouts.app')

@section('content')
<div class="ui container">
	<div class="ui top attached menu">
		<div class="item">
			<i class="terminal icon"></i>
			Console
		</div>
		<div class="right menu">
			<a href="https://minecraft.gamepedia.com/Commands" target="_blank" class="item"><i class="help icon"></i> Commands</a>
			<a href="https://www.minecraftinfo.com/idlist.htm" target="_blank" class="item"><i class="book icon"></i> ID List</a>
		</div>
	</div>
	<console></console>
</div>
@endsection
