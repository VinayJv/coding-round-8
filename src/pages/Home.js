import { useDataContext } from "../context/DataContext";


export function Home(){
    const { data,setData } = useDataContext();
    return (<div>This is Home</div>);
}