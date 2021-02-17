import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function InputSearch() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const onChange = ({ target: { value } }) => setValue(value);
  const onClick = () => {
    if (value) {
      router.push(`/search?param=${value}`);
    }
  };
  const onKeyUp = ({ key }) => (key === "Enter" ? onClick() : null);
  useEffect(() => {
    setValue(router.query.param || "");
  }, [router.query.param]);
  /**/
  return (
    <div>
      <input value={value} onChange={onChange} onKeyUp={onKeyUp} />
      <button onClick={onClick}>Buscar</button>
    </div>
  );
}
