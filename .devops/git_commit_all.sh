#!/usr/bin/env bash

cd -P "$(dirname ${BASH_SOURCE-$0})/.." >/dev/null || exit 1

CURRENT_BRANCH="$(git branch --show-current)"
[[ "${CURRENT_BRANCH}" == 'master' ]] \
  && echo "NEVER run this on master branch." \
  && exit 1;

git add .
git commit -m "`date +%Y%m%d`: ${@-Updates}."
# git push -f origin "${CURRENT_BRANCH}"