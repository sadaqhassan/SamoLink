import cookieParser  from "cookie-parser";
import cors from 'cors'

export const config = (app)=>{
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors());
};
