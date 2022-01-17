import pkg from '../../package.json';
import { getEnvConfig } from '../utils';
import fs from 'fs';
import axios from 'axios';

const APPLICATION_X_TAR = 'application/x-tar';

function readTarballAsBinary(filename: string): Buffer {
  const buffer: Buffer = fs.readFileSync(filename);
  return buffer;
}

function dockerBuildRemote(host: string, tarball: Buffer) {
  const image = `${pkg.name}:${pkg.version}`;
  const url = host + '/build?t=' + image;
  axios({
    url: url,
    method: 'post',
    data: tarball,
    headers: {
      'Content-Type': APPLICATION_X_TAR,
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response?.data);
      } else {
        console.log('Unexpected expcetion occurred.\nFailed to build images.');
      }

      process.exit(1);
    });
}

function getDockerHost(): string {
  const envConfig = getEnvConfig('VITE_DOCKER_');
  return envConfig['VITE_DOCKER_REMOTE'] as string;
}

const host: string = getDockerHost();
const tarball: Buffer = readTarballAsBinary('app.tar.gz');

dockerBuildRemote(host, tarball);
