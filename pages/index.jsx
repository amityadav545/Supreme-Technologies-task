import { userService } from 'services';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
            <h1>Welcome</h1>
                <h1>{userService.userValue?.firstName}!</h1>
            </div>
        </div>
    );
}
