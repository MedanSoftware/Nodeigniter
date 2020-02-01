# Nodeigniter

> [Nightigniter](https://github.com/MedanSoftware/Nightigniter) NodeJs Server for Realtime Data & WebRTC Server

## Socket.io

### HTML

```html
<script src="http://{{ nodeigniter_host }}:{{ nodeigniter_port }}/NodeigniterSocketio/socket.io.js"></script>
<script>
const socket = io('http://{{ nodeigniter_host }}:{{ nodeigniter_port }}', {
	path : 'NodeigniterSocketio'
});
</script>
```

### Using Webpack

```javascript
import io from 'socket.io-client';

const socket = io('http://{{ nodeigniter_host }}:{{ nodeigniter_port }}', {
	path : 'NodeigniterSocketio',
	transports : ['websocket', 'polling']
});

socket.on('connection', (socket) => {
	console.log('connected');
});
```

---

## PeerJs

### Using Webpack

```javascript
import Peer from 'peerjs-client';

const peer = new Peer('{{ peer_unique_id }}', {host: '{{ nodeigniter_host }}', port: '{{ nodeigniter_port }}', path: '/NodeigniterPeerJs'});
peer.on('connection', data => {
	console.log('connected');
});
```