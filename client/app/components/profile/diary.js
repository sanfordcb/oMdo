var React = require('react');
var DiaryEntry = require('./diaryEntry');
var styleable = require('react-styleable').default;
var css = require('../../styles/profile.css');

function Diary (props) {
  return (
    <ol className={props.css.diary}>
        <DiaryEntry
        data={props.surveys}
      />
    </ol>
  )
}

module.exports = styleable(css)(Diary);
