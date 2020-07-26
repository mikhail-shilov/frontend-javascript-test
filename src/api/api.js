export const getData = (mode) => {

    const dataSetBig = 'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
    const dataSetSmall = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

    let path = null;
    switch (mode) {
        case 'BIG': {
            path = dataSetBig;
            break
        }
        case 'SMALL': {
            path = dataSetSmall;
            break
        }
    }

    return fetch(path).then(response => response.data).then(data => console.log(data));
}