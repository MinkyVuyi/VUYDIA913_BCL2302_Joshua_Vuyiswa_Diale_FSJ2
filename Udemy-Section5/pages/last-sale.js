import { useEffect, useState } from 'react';
import { useSWR } from 'swr';

function LastSalesPage() {
    const [sales, setSales] = useState();
    const [loading, setLoading] = useState(false);

    useSWR('https://nextjs-course-fb252-default-rtdb.firebaseio.com/sales.json');

    useEffect(() => {
        setIsLoading(true);
        fetch('https://nextjs-course-fb252-default-rtdb.firebaseio.com/sales.json').then(response => response.json()).then(data => {
            const transformedSales = [];

            for (const key in data) {
               transformedSales.push({id: key, username: data[key].username, volume: data[key].volume,
            });
            }

            setSales(transformedSales);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (!sales) {
        return <p>No data yet</p>;
    }

    return (
        <ul>
          {sales.map(sale => <li key={sale.id}>{sale.username} - ${sale.volume}</li>)}  
          
        </ul>
    )
}

export default LastSalesPage;

//$ for cosmetics