import dev from './dev';
import prod from './prod';

const environment = () => {
    if (process.env.NODE_ENV === "production") {
        return prod;
    }
    return dev
}

export default environment();