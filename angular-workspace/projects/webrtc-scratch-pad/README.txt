The following 10-step recipe describes a typical usage scenario of the WebRTC APIs:

1.  Create a MediaStream object from your local devices (e.g., microphone, webcam).
2.  Obtain a URL blob from the local MediaStream.
3.  Use the obtained URL blob for a local preview.
4.  Create an RTCPeerConnection object.
5.  Add the local stream to the newly created connection.
6.  Send your own session description to the remote peer.
7.  Receive the remote session description from your peer.
8.  Process the received session description and add the remote stream to your RTCPeerConnection.
9.  Obtain a URL blob from the remote stream.
10. Use the obtained URL blob to play the remote peer’s audio and/or video.

