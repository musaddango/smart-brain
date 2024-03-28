import { Emoji, } from './Rank.controller';
import { memo, useState } from 'react';

const Rank = memo(function Rank({ name, entries }) {
  const [emoji, setEmoji] = useState('');

  Emoji(entries)
  .then((data)=>{
    console.log(data.emoji);
    setEmoji(data.emoji);
  });

  return (
    <div>
      <div className='white f3'>
        {`${name}, your current entry count is...`}
      </div>
      <div className='white f1'>
         {entries} 
      </div>
      <div className='white f1'>
        Rank: {emoji}
      </div>
    </div>
  );
})

export default Rank;