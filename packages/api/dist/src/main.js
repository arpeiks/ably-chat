"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ably_1 = __importDefault(require("ably"));
const express_1 = __importDefault(require("express"));
const key = '37EIzw.OhTL3Q:nL2B1l7Rkboe4NwW3B_n45OsuiwfLC2nNVKlXwUnIAk';
const app = (0, express_1.default)();
const ablyRealtime = new ably_1.default.Realtime(key);
const channel = ablyRealtime.channels.get('ably-chat');
app.use(express_1.default.json());
app.post('/send-message', (req, res) => {
    const body = req.body;
    const data = { msg: body.msg, user: body.user, action: body.action };
    channel.publish('data', data, (err) => {
        if (err)
            throw err;
        console.log('publish suceeded', { data });
    });
    res.send({ status: 'okay', data });
});
app.listen(8000, () => console.log('Api running on port 8000'));
//# sourceMappingURL=main.js.map