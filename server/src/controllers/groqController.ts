import { Response } from 'express';
import groqService from '../services/groqService';
import User from '../models/User';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

const groqController = {
  async generateMessage(req: AuthenticatedRequest, res: Response) {
    console.log('--- Received request to generate message ---');
    try {
      const userId = req.user?.id;
      if (!userId) {
        console.log('[ERROR] User not authenticated');
        return res.status(401).json({ error: 'User not authenticated' });
      }
      console.log(`Authenticated user ID: ${userId}`);

      const user = await User.findById(userId);
      if (!user) {
        console.log(`[ERROR] User not found for ID: ${userId}`);
        return res.status(404).json({ error: 'User not found' });
      }
      console.log(`Found user: ${user.email} with pitch count: ${user.pitchCount}`);

      if (user.pitchCount >= 10) {
        console.log(`[LIMIT REACHED] User ${user.email} has reached their limit.`);
        return res.status(403).json({ error: 'You have reached your limit of 10 pitches.' });
      }

      const { industry, audience, recipientInfo } = req.body;
      console.log('--- Calling Groq service to generate message ---');
      const result = await groqService.generateMessage({ industry, audience, recipientInfo });
      console.log('--- Groq service returned successfully ---');

      user.pitchCount += 1;
      console.log(`Incremented pitch count to: ${user.pitchCount}`);

      await user.save();
      console.log('--- User with updated pitch count saved successfully ---');

      res.json({ 
        message: result, 
        remainingPitches: 10 - user.pitchCount 
      });

    } catch (error) {
      console.error('--- ERROR in generateMessage controller ---', error);
      res.status(500).json({ error: 'Failed to generate message' });
    }
  }
};

export default groqController;