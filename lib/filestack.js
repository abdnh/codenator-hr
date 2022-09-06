import * as filestack from 'filestack-js';
const filestackClient = filestack.init(process.env.FILESTACK_APIKEY);

export default filestackClient;
