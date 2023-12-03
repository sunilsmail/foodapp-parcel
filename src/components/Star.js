const Star = ({ star, costForTwoString, deliveryTime }) => {
    return (<span className="star">
        {newFunction()}  {costForTwoString} {deliveryTime}-Mins
    </span>);

    function newFunction() {
        let value;
        if (star > 4) {
            value = (<span style={{ backgroundColor: 'green', borderRadius: '16px', padding: '4px' }}>
                🌞<small>{star}</small>
            </span>);
        }
        else if (star > 3) {
            value = <span style={{ backgroundColor: 'orange', borderRadius: '16px', padding: '4px' }}>🌝<small>{star}</small></span>;
        }
        else if (star > 2) {
            value = <span style={{ backgroundColor: 'blue', borderRadius: '16px', padding: '4px' }}>🌚<small>{star}</small></span>;
        }
        else if (star > 1) {
            value = <span style={{ backgroundColor: 'red', borderRadius: '16px', padding: '4px' }}>🌑<small>{star}</small></span>;
        }
        return value;
    }
}

export default Star;