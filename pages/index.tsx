import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // データの非同期読み込みをシミュレートするために、一定時間後にisLoadingをfalseに設定
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      router.push('/index_ja.html');
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return null;
};

export default HomePage;