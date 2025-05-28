import s from './page.module.scss';
import SignUp from '@/components/Account/components/SignUp';

export default function Home() {
    return (
        <div className={s.page}>
            <SignUp />
        </div>
    );
}
