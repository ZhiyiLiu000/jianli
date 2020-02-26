import React from 'react';

export default class SvgBG extends React.Component {
    render() {
        return (
            <div>
                <svg id="ace-bg-shape-1" className="hidden-sm hidden-xs" height="519" width="758">
                    <polygon points="0,455,693,352,173,0,92,0,0,71"
                             style={{fill:'#d2d2d2', stroke:'purple', strokeWidth:0, opacity: 0.5}}/>
                </svg>
                <svg id="ace-bg-shape-2" className="hidden-sm hidden-xs" height="536" width="633">
                    <polygon points="0,0,633,0,633,536" style={{fill:'#c0e3e7', stroke:'purple', strokeWidth:0}}/>
                </svg>
            </div>
        )
    }
}


