#!/usr/bin/env bash

cd -P "$(dirname ${BASH_SOURCE-$0})/.." >/dev/null || exit 1

CURRENT_BRANCH="$(git branch --show-current)"
git push origin "${CURRENT_BRANCH}"
git push github "${CURRENT_BRANCH}"
git push gitea  "${CURRENT_BRANCH}"