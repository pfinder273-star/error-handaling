import {NextResponse} from "next/server";

export async function GET( request: Request){
try{
        const {searchParams} = new URL (request.url);
        const id =searchParams.get("id");

        if(!id){
            return NextResponse.json(
                {error: "Students ID is required"},
                {status:400}
    
            );
        }

        if(id ! =="101"){
            return NextResponse.json(
                {
                    error: "Student not found"
                },
                {status:400}
            );
        }

        return NextResponse.json({
            id:101,
            name: "Rahul",
            course: "mca",
        });

    }catch(error){
        return NextResponse.json(
            {error: "INternal server error"},
                {status:500}
        );
    }
}