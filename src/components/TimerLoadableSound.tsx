/**
 * MIT License
 * Copyright (c) 2021 Reece Dunham
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import React from "react"

const buildYouTubeEmbedUrl = (data: string) => {
    const params = `controls=0&amp;autoplay=1${
        data[1] != null ? `&amp;start=${data[1]}` : ""
    }`
    return `https://www.youtube.com/embed/${data[0]}?${params}`
}

export interface LoadableSoundProps {
    show?: boolean
    data: string
}

export default function LoadableSound(props: LoadableSoundProps) {
    return props.show && props.data[0] !== "" ? (
        <iframe
            width="0"
            height="0"
            src={buildYouTubeEmbedUrl(props.data)}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            title="sound"
        />
    ) : (
        <div hidden />
    )
}
