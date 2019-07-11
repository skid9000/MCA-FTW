<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="ui fixed inverted menu">
            <div class="ui container">
                <a class="header item" href="{{ url('/') }}">
					{{ config('app.name', 'Laravel') }}
					<a class="item" href="{{ route('home') }}">Home</a>
                    <a class="item" href="{{ route('admin') }}">Admin panel</a>
                </a>


                <div class="right menu" id="navbarSupportedContent">
					@guest
					@else
						<a class="item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
							<i class="logout icon"></i> Log out
						</a>
						<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
							@csrf
						</form>
					@endguest
                </div>
            </div>
        </nav>

        <main class="minimargin">
            @yield('content')
        </main>
    </div>
</body>
</html>
