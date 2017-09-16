#!/bin/bash
sudo docker build -t c1_bootstrap . && \
sudo docker run --rm -it -w /workspace -v $(pwd):/workspace -p3000:3000 -p3001:3001 c1_bootstrap
