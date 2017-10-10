/*
 * Copyright 2017 Palantir Technologies, Inc. All rights reserved.
 * Licensed under the BSD-3 License as modified (the “License”); you may obtain a copy
 * of the license at https://github.com/palantir/blueprint/blob/master/LICENSE
 * and https://github.com/palantir/blueprint/blob/master/PATENTS
 */

/**
 * Returns `true` if `navigator.platform` matches a known Mac platform, or
 * `false` otherwise.
 */
export function isMac() {
    const platform = typeof navigator !== "undefined" ? navigator.platform : undefined;
    return platform == null ? false : /Mac|iPod|iPhone|iPad/.test(platform);
}

/**
 * Returns `true` if (1) the platform is Mac and the keypress includes the `cmd`
 * key, or (2) the platform is non-Mac and the keypress includes the `ctrl` key.
 */
export const isModKeyPressed = (event: KeyboardEvent) => {
    const isMacPlatform = isMac();
    return (isMacPlatform && event.metaKey) || (!isMacPlatform && event.ctrlKey);
};
