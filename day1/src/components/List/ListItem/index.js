export function Numbers() {
    const numbers = [1, 2, 3, 4, 5];
    const doubled = numbers.map((number) => number * 2);
    return <>
        <div>
            <ul>
                <li>{numbers[0]}</li>
                <li>{numbers[1]}</li>
                <li>{numbers[2]}</li>
                <li>{numbers[3]}</li>
                <li>{numbers[4]}</li>
            </ul>
            <ul>
                    <li>{doubled[0]}</li>
                    <li>{doubled[1]}</li>
                    <li>{doubled[2]}</li>
                    <li>{doubled[3]}</li>
                    <li>{doubled[4]}</li>
                </ul>
            </div>
            
        </>
}


