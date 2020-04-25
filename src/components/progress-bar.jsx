import React from 'react';

export default function ProgressBar(props) {
  const barWidth = { width: `${props.percentComplete}%` };

  return (
    <div className="progress progress-bar-height mb-3">
      <div className="progress-bar" role="progressbar" style={barWidth} aria-valuenow={props.percentComplete} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  );
}
