#!/bin/bash
# Take video controller for USB webcam
streamer -q -c /dev/video0 -s 720x480 -f rgb24 -r 20 -t 00:00:10 -o /home/pi/webcam/captureVideo.avi
