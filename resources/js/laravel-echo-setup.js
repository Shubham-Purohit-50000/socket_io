import Echo from 'laravel-echo';

console.log(window.location.hostname + ":" + window.laravel_echo_port);

window.Echo = new Echo({
    broadcaster: 'socket.io',
    host: window.location.hostname + ":" + window.laravel_echo_port
});