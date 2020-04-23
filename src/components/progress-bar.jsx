import React from 'react';

export default function ProgressBar(props) {
  const barWidth = `width: ${props.percentComplete}%`;
  return (
    <div class="progress">
      <div class="progress-bar" role="progressbar" style={barWidth} aria-valuenow={props.percentComplete} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  );
}
