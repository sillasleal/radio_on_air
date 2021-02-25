import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { removeAccents } from '@ultils/String';

export default function InputSearch() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const onChange = ({ target: { value } }) => setValue(value);
  const onClick = () => {
    if (value) {
      router.push(`/search?param=${removeAccents(value)}`);
    }
  };
  const onKeyUp = ({ key }) => (key === 'Enter' ? onClick() : null);
  useEffect(() => {
    setValue(router.query.param || '');
  }, [router.query.param]);
  /**/
  return (
    <div>
      <input name="podcast" value={value} onChange={onChange} onKeyUp={onKeyUp} />
      <button onClick={onClick}>Buscar</button>
    </div>
  );
}
