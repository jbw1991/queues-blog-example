#!/bin/bash

i=1

while true
do
  curl localhost:8787 -d "hello #$i"
  ((i=i+1))
  sleep 1
done