const URL = "https://picsum.photos/v2/list?page=6&limit=6";

interface fetchedDataProps {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const loader = async () => {
  const res = await fetch(URL);
  const datas = await res.json();
  return datas.map((data: fetchedDataProps) => data.download_url).slice(0, 6);
};
