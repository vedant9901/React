import React from 'react';
import '../Shared/loader.scss';
export default function Loader() {
    return (
        <div id="cssload-pgloading">
            <div id="cssload-tag">
            <span class="tag">#Know</span><span class="tag">What</span><span class="tag">You</span><span class="tag">Breathe</span>
        </div>
        <div class="cssload-loadingwrap">
            <ul class="cssload-bokeh">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
    )
}

