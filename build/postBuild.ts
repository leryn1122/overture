import pkg from '../package.json';
import chalk from 'chalk';

export async function build() {
  const argvList = process.argv.splice(2);
  try {
    console.log(`✨ ${chalk.cyanBright(`[${pkg.name}:${pkg.version}]`)}` + ' build successfully!');
  } catch (error) {
    console.error(chalk.red('vite build failed:\n' + error));
    process.exit(1);
  }
}

build();
