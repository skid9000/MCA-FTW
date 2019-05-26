@extends('layouts.app')

@section('content')
<div class="ui container">
    <div class="ui segment">
        <h2 class="ui center aligned header">Login</h2>

        <form method="POST" action="{{ route('login') }}" class="ui form{{ !empty($errors->all()) ? ' error' : '' }}">
            @csrf

            <div class="field{{ $errors->has('email') ? ' error' : '' }}">
                <label for="email">Email</label>
                <input id="email" type="email" name="email" value="{{ old('email') }}" required autofocus autocomplete="email">
            </div>

            <div class="field{{ $errors->has('password') ? ' error' : '' }}">
                <label for="password">Password</label>
                <input id="password" type="password" name="password" required autocomplete="current-password">
            </div>

            <div class="field">
                <div class="ui checkbox">
                    <input class="hidden" tabindex="0" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked=""' : '' }}>
                    <label for="remember">Remember Me</label>
                </div>
            </div>

            @if (!empty($errors->all()))
                <div class="ui error message">
                    <div class="header">{{ __('auth.error') }}</div>
                    <div class="content">
                        <ul>
                            @foreach ($errors->all() as $message)
                                <li>{{ $message }}</li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            @endif

            <button type="submit" class="ui primary button">
                Login
            </button>
        </form>
    </div>
</div>
@endsection
