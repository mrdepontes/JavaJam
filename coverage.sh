#!/usr/bin/bash

if [[ $(curl localhost:3000/liveliness) == 'alive' ]]; then
  exit 0
else
  echo "failure"
  exit 1
fi
