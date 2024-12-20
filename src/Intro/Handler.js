import {
  Container, FlexRow, FlexColumn, Label, ContentBoldGreen, GREY_BG_COLOR, ContentBold, Content
} from '../Style';
import Rectangle from '../images/Rectangle.png';

export const timeTableHandler = (data) => {
  return (
    <div>
      {data.map(row => {
        return (
          <div style={{ ...FlexRow, backgroundColor: row.background === 'grey' ? GREY_BG_COLOR : 'white', paddingTop: '25px', paddingBottom: '25px', paddingLeft: '20px', paddingRight: '20px', gap: '60px' }}>
            <div style={{ ...ContentBold, marginTop: 'auto', marginBottom: 'auto' }}>{row.date}</div>
            <div style={{ ...FlexColumn, ...Content, textAlign: 'left' }}>
              {row.content.map((r, i) => {
                if (i === 0) {
                  return (
                    <div>
                      <img src={Rectangle} style={{ width: '5px', height: '5px', marginRight: '6px', marginBottom: '3px' }} />
                      {r}
                    </div>
                  );
                } else {
                  return (<div>{r}</div>);
                }
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}