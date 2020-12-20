
const formatOutput = (output) => {
    switch(output) {
        case 'P+':
            return 'strongly positive';
            break;
        case 'P':
            return 'positive';
            break;
        case 'NEU':
            return 'neutral';
            break;
        case 'N':
            return 'negative';
            break;
        case 'N+':
            return 'strongly negative';
            break;
        case 'NONE':
            return 'without sentiment';
            break;
    };
};

export {formatOutput}