#!/bin/bash

# back-end
cd ./back-end
npm run start&

# front-end
cd ../
cd ./front-end
npm start&
