import prompt from 'prompt';
import promptSchemaQRCode from '../../prompts-schema/prompt-schema-qrcode.js';
import handle from './handle.js';

async function createQrCode() {
    prompt.get(promptSchemaQRCode, handle);
    prompt.start();

}

export default createQrCode;