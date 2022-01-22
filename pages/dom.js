import styles from "../styles/Dom.module.css"

const DOM = ({ developer }) => {
    console.log(developer)
return (
        <div className='page-container'>
            <div>
                <h1>Developer of the month</h1>
            </div>
        </div>
    )
}
export const getServerSideProps = async () => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/nabendu82/news-next/devOfMonth',
    );
    const developer = await apiResponse.json();
return {
        props: {
            developer,
        },
    };
};
export default DOM