import { test, expect } from '@playwright/test';
import { ApiHelper, ApiRequestOptions } from '../../../utils/ApiHelper';
import { createLogger } from '../../../utils/logger';

const log = createLogger('Create-Booking');

interface CreateBookingResponse {
    bookingid: number;
    booking: {
        firstname: string;
        lastname: string;
        totalprice: number;
        depositpaid: boolean;
        bookingdates: {
            checkin: string;
            checkout: string;
        };
        additionalneeds: string;

    };

}
test.describe('@P0 @regression Level 2 (ApiHelper) -Post Create Booking', () => {

    test('Post /Booking create', async ({ request }, testinfo) => {

        const api = new ApiHelper(request);

        const payload = {
            firstname: 'John',
            lastname: 'Doe',
            totalprice: 100,
            depositpaid: false,
            bookingdates: {
                checkin: '2024-01-01',
                checkout: '2024-01-10'
            },
            additionalneeds: 'Breakfast'
        };

        let body: CreateBookingResponse;
        // Step 1 — send the create request

        await test.step('Post /Booking with new booking payload', async () => {
            log.info(`Step 1: POST /booking for ${payload.firstname} ${payload.lastname} (price ${payload.totalprice})`);

            const response = await api.post('/booking', payload);

            log.info(`Step 1: server responded with status ${response.status()}`);
            expect(api.isSuccess(response)).toBeTruthy();
            body = await api.parseJsonResponse<CreateBookingResponse>(response);
            log.info(`Step 1: created booking with ID ${body.bookingid}`);

        });
        // Step 2 — verify the server echoed the booking back
        await test.step('Verify the created booking is echoed back', async () => {
            expect(body.bookingid).toBeGreaterThan(0);
            expect(body.booking.firstname).toBe(payload.firstname);
            expect(body.booking.lastname).toBe(payload.lastname);
            expect(body.booking.totalprice).toBe(payload.totalprice);
            expect(body.booking.depositpaid).toBe(payload.depositpaid);
            expect(body.booking.bookingdates.checkin).toBe(payload.bookingdates.checkin);
            expect(body.booking.bookingdates.checkout).toBe(payload.bookingdates.checkout);
            expect(body.booking.additionalneeds).toBe(payload.additionalneeds);
        });
    });
});


