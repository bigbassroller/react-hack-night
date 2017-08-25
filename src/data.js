import React from 'react';

import axios from 'axios';

export function getData(){
  return axios.get('https://data.sfgov.org/resource/PdId.json')
}


