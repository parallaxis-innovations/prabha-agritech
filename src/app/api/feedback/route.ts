import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Types for the feedback data
type FeedbackData = {
    name: string;
    email: string;
    rating: number;
    feedback: string;
    isPublic: boolean;
};

type StoredFeedback = FeedbackData & {
    id: string;
    isApproved: boolean;
    createdAt: string;
};

export async function GET() {
    try {
        // Get the path to the feedback.json file
        const filePath = path.join(process.cwd(), 'src/data/feedback.json');

        // Read the feedback data
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);

        // Filter to only show approved and public feedbacks
        const publicFeedbacks = data.feedbacks.filter(
            (feedback: StoredFeedback) => feedback.isPublic && feedback.isApproved
        );

        return NextResponse.json({ feedbacks: publicFeedbacks });
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        return NextResponse.json(
            { error: 'Failed to fetch feedbacks' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body: FeedbackData = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.rating || !body.feedback) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create the feedback object with additional fields
        const newFeedback = {
            id: uuidv4(),
            ...body,
            // isApproved: false, // New feedbacks are not approved by default
            isPublic: true,  // ✅ Auto public
            isApproved: true, // ✅ Auto approved
            createdAt: new Date().toISOString()
        };

        // Get the path to the feedback.json file
        const filePath = path.join(process.cwd(), 'src/data/feedback.json');

        // Read the existing feedback data
        const fileData = await fs.readFile(filePath, 'utf8');
        const data = JSON.parse(fileData);

        // Add the new feedback
        data.feedbacks = [...data.feedbacks, newFeedback];

        // Write the updated data back to the file
        await fs.writeFile(filePath, JSON.stringify(data, null, 2));

        return NextResponse.json(
            { message: 'Feedback submitted successfully', feedback: newFeedback },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error processing feedback:', error);
        return NextResponse.json(
            { error: 'Failed to process feedback' },
            { status: 500 }
        );
    }
}
