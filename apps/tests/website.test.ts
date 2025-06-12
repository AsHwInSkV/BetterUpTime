import { describe, it ,expect } from 'bun:test';
import axios from "axios";

let BASE_URL = "http://localhost:3000";

describe("Website gets created", () => {
    it("Website not created if url not present", async() => {
        try{
            await axios.post(`${BASE_URL}/website`, {});
            expect(false,"Website created when is shouldn't");
        } catch (error) {
        }
    });

    it("Website not created if url is present", async() => {
            const response = await axios.post(`${BASE_URL}/website`, {
                url: "https://example.com"
            });
            expect(response.data.id).not.toBeNull();
    });
});
