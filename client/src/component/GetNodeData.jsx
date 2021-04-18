import axios from 'axios';

async function GetNodeData(state, url) {
    try {
        const response = await axios.get(url);
        state(response.data.rows);
    } catch (error) {
        console.error(error);
    }
};

export default GetNodeData;